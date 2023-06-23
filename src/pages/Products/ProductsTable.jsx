import Column from "../../components/Table/Column"
import Row from "../../components/Table/Row"
import Table from "../../components/Table/Table"
import TableSection from "../../components/Table/TableSection"
import Button from "../../components/Button"

export default function ProductsTable({products, handleEditProduct, handleDeleteProduct})
{
  return(
    <div className="w-full overflow-x-auto p-4 mx-auto mt-5">
      <Table>
        <TableSection type="thead">
          <Row>
            <Column type="th">
              Descripción
            </Column>
            
            <Column type="th">
              Precio Venta
            </Column>

            <Column type="th">
              Precio Compra
            </Column>

            <Column type="th">
              Proveedor
            </Column>

            <Column type="th">
              Administración
            </Column>

          </Row>
        </TableSection>
        <TableSection type="tbody">
          {
            products.map(product => (
              <Row key={product.id}>
                <Column type="td">
                  {product.description}
                </Column>

                <Column type="td">
                  {product.sale_price}
                </Column>

                <Column type="td">
                  {product.purchase_price}
                </Column>


                <Column type="td">
                  {product.provider}
                </Column>

                <Column type="td">
                  <div className="flex gap-2 justify-center">
                    <Button variant="warning" classes="rounded-md"
                      onClick={() => handleEditProduct(product.id)}
                    >
                      editar
                    </Button> 

                    <Button variant="danger" classes="rounded-md"
                      onClick={() => { handleDeleteProduct(product.id) }}
                    >
                      eliminar
                    </Button> 
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