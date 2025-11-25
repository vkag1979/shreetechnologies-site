// functions/api/contact.js

export async function onRequest(context) {
  const { request, env } = context;

  // Only allow POST
  if (request.method !== 'POST') {
    return json({ success: false, message: 'Only POST allowed' }, 405);
  }

  try {
    const formData = await request.formData();

    const name    = (formData.get('name')    || '').toString().trim();
    const company = (formData.get('company') || '').toString().trim();
    const email   = (formData.get('email')   || '').toString().trim();
    const phone   = (formData.get('phone')   || '').toString().trim();
    const service = (formData.get('service') || '').toString().trim();
    const message = (formData.get('message') || '').toString().trim();

    if (!name || !email) {
      return json({ success: false, message: 'Name and Email are required.' }, 400);
    }

    const lead = {
      name,
      company,
      email,
      phone,
      service,
      message,
      created_at: new Date().toISOString(),
      ip: request.headers.get('CF-Connecting-IP') || '',
      ua: request.headers.get('User-Agent') || ''
    };

    // Save to KV if bound as LEADS_KV
    try {
      if (env.LEADS_KV) {
        const id = crypto.randomUUID();
        await env.LEADS_KV.put(`lead:${id}`, JSON.stringify(lead));
      } else {
        console.warn('LEADS_KV binding missing; lead not stored in KV');
      }
    } catch (kvErr) {
      console.error('Error writing to KV:', kvErr);
      // Don't break user experience if KV fails
    }

    console.log('New lead:', lead);
    return json({ success: true });
  } catch (err) {
    console.error('Error in contact function:', err);
    return json({ success: false, message: 'Server error' }, 500);
  }
}

function json(obj, status = 200) {
  return new Response(JSON.stringify(obj), {
    status,
    headers: {
      'Content-Type': 'application/json',
      'Cache-Control': 'no-store'
    }
  });
}
