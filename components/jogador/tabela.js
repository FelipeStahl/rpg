export default function Tabela(){
    return(
        <table className="w-full flex flex-row flex-no-wrap sm:bg-white rounded-lg overflow-hidden sm:shadow-lg sm:table">
      <thead className="text-white">
        <tr className="bg-gray-400 flex flex-col flex-no wrap sm:table-row rounded-l-lg sm:rounded-none mb-2 sm:mb-0">
          <th className="p-3 text-left border-b-2">Name</th>
          <th className="p-3 text-left border-b-2">Email</th>
          <th className="p-3 text-left border-b-2" width="110px">Actions</th>
        </tr>
        <tr className="bg-gray-400 flex flex-col flex-no wrap sm:table-row rounded-l-lg sm:rounded-none mb-2 sm:mb-0 sm:hidden">
          <th className="p-3 text-left border-b-2">Name</th>
          <th className="p-3 text-left border-b-2">Email</th>
          <th className="p-3 text-left border-b-2" width="110px">Actions</th>
        </tr>
        <tr className="bg-gray-400 flex flex-col flex-no wrap sm:table-row rounded-l-lg sm:rounded-none mb-2 sm:mb-0 sm:hidden">
          <th className="p-3 text-left border-b-2">Name</th>
          <th className="p-3 text-left border-b-2">Email</th>
          <th className="p-3 text-left border-b-2" width="110px">Actions</th>
        </tr>
        <tr className="bg-gray-400 flex flex-col flex-no wrap sm:table-row rounded-l-lg sm:rounded-none mb-2 sm:mb-0 sm:hidden">
          <th className="p-3 text-left border-b-2">Name</th>
          <th className="p-3 text-left border-b-2">Email</th>
          <th className="p-3 text-left border-b-2" width="110px">Actions</th>
        </tr>
      </thead>
      <tbody className="flex-1 sm:flex-none">
        <tr className="flex flex-col flex-no wrap sm:table-row mb-2 sm:mb-0">
          <td className="border-grey-light border hover:bg-gray-100 p-3">John Covv</td>
          <td className="border-grey-light border hover:bg-gray-100 p-3 truncate">contato@johncovv.com</td>
          <td className="border-grey-light border hover:bg-gray-100 p-3 text-red-400 hover:text-red-600 hover:font-medium cursor-pointer">Delete</td>
        </tr>
        <tr className="flex flex-col flex-no wrap sm:table-row mb-2 sm:mb-0">
          <td className="border-grey-light border hover:bg-gray-100 p-3">Michael Jackson</td>
          <td className="border-grey-light border hover:bg-gray-100 p-3 truncate">m_jackson@mail.com</td>
          <td className="border-grey-light border hover:bg-gray-100 p-3 text-red-400 hover:text-red-600 hover:font-medium cursor-pointer">Delete</td>
        </tr>
        <tr className="flex flex-col flex-no wrap sm:table-row mb-2 sm:mb-0">
          <td className="border-grey-light border hover:bg-gray-100 p-3">Julia</td>
          <td className="border-grey-light border hover:bg-gray-100 p-3 truncate">julia@mail.com</td>
          <td className="border-grey-light border hover:bg-gray-100 p-3 text-red-400 hover:text-red-600 hover:font-medium cursor-pointer">Delete</td>
        </tr>
        <tr className="flex flex-col flex-no wrap sm:table-row mb-2 sm:mb-0">
          <td className="border-grey-light border hover:bg-gray-100 p-3">Martin Madrazo</td>
          <td className="border-grey-light border hover:bg-gray-100 p-3 truncate">martin.madrazo@mail.com</td>
          <td className="border-grey-light border hover:bg-gray-100 p-3 text-red-400 hover:text-red-600 hover:font-medium cursor-pointer">Delete</td>
        </tr>
      </tbody>
      {/* <style>
      html,
      body {
        height: 100%;
      }
    
      @media (min-width: 640px) {
        table {
          display: inline-table !important;
        }
    
        thead tr:not(:first-child) {
          display: none;
        }
      }
    
      td:not(:last-child) {
        border-bottom: 0;
      }
    
      th:not(:last-child) {
        border-bottom: 2px solid rgba(0, 0, 0, .1);
      }
    </style> */}
    </table>

    )
}