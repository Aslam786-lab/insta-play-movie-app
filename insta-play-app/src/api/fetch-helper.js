export async function fetchAPI({ url = "", method = "GET", body }) {
  const payload = {
    method,
    headers: {
      "Content-Type": "application/json",
    },
  };

  if (body && method !== "GET") {
    payload.body = JSON.stringify(body);
  }
  const response = await fetch(url, payload);
  return response;
}
