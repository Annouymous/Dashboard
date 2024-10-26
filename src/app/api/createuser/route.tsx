import { AdminAuth } from "@/library/Firebase/AdminConfig";

export async function POST(request: Request) {
  try {
    const { email, password } = await request.json();
    if (!email || !password) {
      return new Response(JSON.stringify({ error: 'Email and password are required.' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }
    const userRecord = await AdminAuth.createUser({ email, password });
    console.log(userRecord);
    return new Response(JSON.stringify({ uid: userRecord.uid, message: 'User created successfully!' }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.log('Error creating user:', error);
    return new Response(JSON.stringify({ error: 'Internal Error: Unable to create user' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}

