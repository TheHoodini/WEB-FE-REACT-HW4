const getStatus = (compliance) => {
    if (compliance <= 35) return { text: "Crítico", color: "red" };
    if (compliance > 35 && compliance <= 75) return { text: "Aceptable", color: "orange" };
    return { text: "Exitoso", color: "green" };
};

const ObjTable = ({ data }) => {
    return (
        <div className="overflow-x-auto">
            <table className="min-w-full border-collapse border border-gray-300">
                <thead className="bg-gray-50">
                    <tr>
                        <th className="p-4 text-xs sm:text-sm md:text-base text-center border border-gray-300">Código</th>
                        <th className="p-4 text-xs sm:text-sm md:text-base text-center border border-gray-300">Objetivo</th>
                        <th className="p-4 text-xs sm:text-sm md:text-base text-center border border-gray-300">Meta</th>
                        <th className="p-4 text-xs sm:text-sm md:text-base text-center border border-gray-300">Avance</th>
                        <th className="p-4 text-xs sm:text-sm md:text-base text-center border border-gray-300">Cumplimiento</th>
                        <th className="p-4 text-xs sm:text-sm md:text-base text-center border border-gray-300">Estado</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((objective) => {
                        const status = getStatus(objective.compliance);
                        return (
                            <tr key={objective.id} className="bg-white even:bg-gray-50">
                                <td className="p-4 text-xs sm:text-sm md:text-base text-center border border-gray-300">{objective.id}</td>
                                <td className="p-4 text-xs sm:text-sm md:text-base text-center border border-gray-300 font-light">{objective.goal}</td>
                                <td className="p-4 text-xs sm:text-sm md:text-base text-center border border-gray-300">
                                    {objective.target >= 100 ? `$ ${objective.target.toLocaleString()}` : `${objective.target}%`}
                                </td>
                                <td className="p-4 text-xs sm:text-sm md:text-base text-center border border-gray-300">
                                    {objective.progress >= 100 ? `$ ${objective.progress.toLocaleString()}` : `${objective.progress}%`}
                                </td>
                                <td className="p-4 text-xs sm:text-sm md:text-base text-center border border-gray-300">{objective.compliance}%</td>
                                <td className="p-4 text-xs sm:text-sm md:text-base text-center border border-gray-300" style={{ color: status.color }}>
                                    {status.text}
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
};

export default ObjTable;
