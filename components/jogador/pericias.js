export default function Pericias({dados, campo}){
    function graduacao(num){
        let rows = [];
        for (let index = 0; index < num; index++) {
            rows.push(<div className="w-2 h-5 rounded-md flex bg-blue-800 mr-1"/>);          
        }
        return rows;
    }
    function cabecalho(){
        let rows = []
        for (let index = 0; index < dados.length; index++) {
            rows.push(
                <tr className={"bg-gray-600 flex flex-col flex-no wrap sm:table-row rounded-l-lg sm:rounded-none mb-2 sm:mb-0" + (index > 0 && " sm:hidden")}>
                    <th className="p-3 text-left h-12">{campo}</th>
                    <th className="p-3 text-left h-12">Dados</th>
                    <th className="p-3 text-left h-12" width="110px">Graduação</th>
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
                {e.carreira ?
               <td className="hover:bg-gray-100 p-3 bg-blue-900 text-white h-12">{e.nome + " (" + e.nivel + ")"}</td>
               :    
               <td className={"hover:bg-gray-100 p-3 h-12"}>{e.nome + " (" + e.nivel + ")"}</td>
            }
               <td className="hover:bg-gray-100 p-3 truncate h-12">
                <div className="flex">
                    <div className="w-5 h-5 rounded-sm flex bg-blue-800 mr-1"/>
                    <div className="w-5 h-5 rounded-sm flex bg-blue-800 mr-1"/>
                    <div className="w-5 h-5 rounded-sm flex bg-yellow-500 mr-1"/>
                </div>
               </td>
               <td className="hover:bg-gray-100 p-3 truncate h-12">
                   <div className="flex">
                        {graduacao(e.graduacao)}
                   </div>
                </td>
            </tr>
          ))}
      </tbody>
    </table>

    )
}