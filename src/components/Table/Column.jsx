export default function Column({children, type})
{
  return type === 'th' && (
    <th className="p-2 text-left">
      {children}
    </th>
  ) || type === 'td' && (
    <td className="p-2">
      {children}
    </td>
  )
}