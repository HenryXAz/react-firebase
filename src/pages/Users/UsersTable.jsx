import Column from "../../components/Table/Column";
import Row from "../../components/Table/Row";
import Table from "../../components/Table/Table";
import TableSection from "../../components/Table/TableSection";
import Button from '../../components/Button'

export default function UsersTable({ users, handleEditUser, handleDeleteUser }) {
  return (
    <div className="w-full overflow-x-auto p-4 mx-auto mt-5">
      <Table>
        <TableSection type="thead">
          <Row>
            <Column type="th">
              Nombre
            </Column>
            <Column type="th">
              Correo
            </Column>
            <Column type="th">
              Rol
            </Column>
            <Column type="th">
              Administración
            </Column>
          </Row>
        </TableSection>
        <TableSection type="tbody">
          {
            users.map(user => (
              <Row key={user.id}>
                <Column type="td">
                  {user.name} {user.last_name}
                </Column>
                <Column type="td">
                  {user.email}
                </Column>
                <Column type="td">
                  {user.role === "admin" && "Administrador"}
                  {user.role === "manager" && "Gerente"}
                  {user.role === "seller" && "Vendedor"} 
                </Column>
                <Column type="td">
                  <div className="flex gap-2 justify-center">
                    <Button variant="warning" classes="rounded-md "
                      type="button"
                      onClick={() => handleEditUser({
                        name: user.name,
                        last_name: user.last_name,
                        email: user.email,
                        password: "",
                        role: user.role,
                        status: user.status,
                        id: user.id,
                      })}
                    >
                      editar
                    </Button>
                    {/* <Button variant="danger" classes="rounded-md "
                      onClick={() => { handleDeleteUser(product.id) }}
                    >
                      eliminar
                    </Button> */}
                  </div>
                </Column>
              </Row>
            ))
          }
        </TableSection>
      </Table>
    </div>
  )
}