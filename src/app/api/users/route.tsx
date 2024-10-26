import { AdminAuth, AdminDB } from "@/library/Firebase/AdminConfig";

export async function GET(request: Request) {
  try {
    const userRecordsSnapshot = await AdminDB.collection('users').get();
    const userRecords = userRecordsSnapshot.docs.map(doc => (
      doc.data()
    ));
    return new Response(JSON.stringify({ users: userRecords }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.log('Error retrieving users:', error);
    return new Response(JSON.stringify({ error: 'Internal Error: Unable to retrieve users' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}
