export default function Inventario({dados}){
    function cabecalho(){
        let rows = []
        for (let index = 0; index < dados.length; index++) {
            rows.push(
                <tr className={"bg-gray-600 flex flex-col flex-no wrap sm:table-row rounded-l-lg sm:rounded-none mb-2 sm:mb-0" + (index > 0 && " sm:hidden")}>
                    <th className="p-3 text-left h-12">Nome</th>
                    <th className="p-3 text-left h-12">Tipo</th>
                    <th className="p-3 text-left h-12">Descrição</th>
                </tr>
            );          
        }
        return rows;
    }

    return(
        <table className="w-full flex flex-row flex-no-wrap sm:bg-white rounded-lg overflow-hidden sm:shadow-lg sm:table">
      <thead className="text-white">
        {cabecalho()}      
      </thead>
      <tbody className="flex-1 sm:flex-none">
          {dados.map(e =>(
            <tr className="flex flex-col flex-no wrap sm:table-row mb-2 sm:mb-0 bg-white">
               <td className={"hover:bg-gray-100 p-3 h-12"}>{e.nome}</td>
               <td className="hover:bg-gray-100 p-3 truncate h-12">{e.pagina}</td>
               <td className="hover:bg-gray-100 p-3 truncate h-12">{e.descricao}</td>
            </tr>
          ))}
      </tbody>
    </table>

    )
}