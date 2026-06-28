"use server";

// Airtable config
const api_key = process.env.AIRTABLE_API_KEY;
const base_id = process.env.AIRTABLE_BASE_ID;
const TABLE = "Landing_Page";
const ENDPOINT = `https://api.airtable.com/v0/${base_id}/${TABLE}`;

export async function submitContact(formData) {
  const name = formData.get("name");
  const email = formData.get("email");
  const message = formData.get("message");

  // Validate required fields
  if (!name || !email || !message) {
    return { success: false, error: "All fields are required." };
  }

  try {
    const res = await fetch(ENDPOINT, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${api_key}`,
      },
      body: JSON.stringify({
        fields: {
          full_name: name,
          email: email,
          message: message,
        },
      }),
    });

    if (!res.ok) {
      const errData = await res.json();
      return {
        success: false,
        error: errData?.error?.message || `Error ${res.status}`,
      };
    }

    return { success: true };
  } catch (err) {
    return { success: false, error: err.message };
  }
}
