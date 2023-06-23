import Column from "../Table/Column";
import Row from "../Table/Row";
import Table from "../Table/Table";
import TableSection from "../Table/TableSection";

export default function UsersTable()
{
  return(
    <table className="p-2 w-full mx-auto">
    <thead className="bg-zinc-900 text-left text-gray-400">
      <tr className="even:bg-zinc-700">
        <Column type="th">
          Name
        </Column>
        <Column type="th">
          Last Name
        </Column>
      </tr>
    </thead>
    <tbody>
      <tr className="even:bg-zinc-700" >
        <Column type="td">
          kk
        </Column>
        <Column type="td">
          jjj
        </Column>
      </tr>
    </tbody>
  </table>
    
  )
}