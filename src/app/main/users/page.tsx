import Table from "@/components/TableComponent";

function Users() {
  const columns= [
    { label: "Nome", key: "name" },
    { label: "Email", key: "email" },
    { label: "Ações", key: "actions" }
  ];

  const rows = [
    { name: "AAAA", email: "teste" },
    { name: "BBBBBB", email: "teste" },
    { name: "AAAA", email: "teste" },
    { name: "BBBBBB", email: "teste" },
    { name: "AAAA", email: "teste" },
    { name: "BBBBBB", email: "teste" },
    { name: "AAAA", email: "teste" },
    { name: "BBBBBB", email: "teste" },
    { name: "AAAA", email: "teste" },
    { name: "BBBBBB", email: "teste" },
    { name: "AAAA", email: "teste" },
    { name: "BBBBBB", email: "teste" },
    { name: "AAAA", email: "teste" },
    { name: "BBBBBB", email: "teste" },
    { name: "AAAA", email: "teste" },
    { name: "BBBBBB", email: "teste" },
    { name: "AAAA", email: "teste" },
    { name: "BBBBBB", email: "teste" },
    { name: "AAAA", email: "teste" },
    { name: "BBBBBB", email: "teste" },
    { name: "AAAA", email: "teste" },
    { name: "BBBBBB", email: "teste" },
    { name: "AAAA", email: "teste" },
    { name: "BBBBBB", email: "teste" },
    { name: "AAAA", email: "teste" },
    { name: "BBBBBB", email: "teste" },
    { name: "AAAA", email: "teste" },
    { name: "BBBBBB", email: "teste" },
    { name: "AAAA", email: "teste" },
    { name: "BBBBBB", email: "teste" },
]

  return (
    <Table
      title="Lista de usuários"
      columns={columns}
      rows={rows}
    />
  );
}

export default Users;
