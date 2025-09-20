export async function GET() {
  const users = [
    { id: 1, name: "Aleksandra" },
    { id: 2, name: "Jovan" },
    { id: 3, name: "Nikola" },
  ];

  return Response.json(users);
}