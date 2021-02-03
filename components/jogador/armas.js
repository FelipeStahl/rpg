export default function Pericias({dados}){
    function cabecalho(){
        let rows = []
        for (let index = 0; index < dados.length; index++) {
            rows.push(
                <tr className={"bg-gray-600 flex flex-col flex-no wrap sm:table-row rounded-l-lg sm:rounded-none mb-2 sm:mb-0" + (index > 0 && " sm:hidden")}>
                    <th className="p-3 text-left h-12">Arma</th>
                    <th className="p-3 text-left h-12">Perícia</th>
                    <th className="p-3 text-left h-12">Dano</th>
                    <th className="p-3 text-left h-12">Crítico</th>
                    <th className="p-3 text-left h-12">Alcance</th>
                    <th className="p-3 text-left h-12">Especial</th>
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
               <td className={"hover:bg-gray-100 p-3 h-12"}>{e.arma}</td>
               <td className="hover:bg-gray-100 p-3 truncate h-12">{e.pericia}</td>
               <td className="hover:bg-gray-100 p-3 truncate h-12">{e.dano}</td>
               <td className="hover:bg-gray-100 p-3 truncate h-12">{e.critico}</td>
               <td className="hover:bg-gray-100 p-3 truncate h-12">{e.alcance}</td>
               <td className="hover:bg-gray-100 p-3 truncate h-12">{e.especial}</td>
            </tr>
          ))}
      </tbody>
    </table>

    )
}