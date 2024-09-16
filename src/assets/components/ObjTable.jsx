const getStatus = (compliance) => {
    if (compliance <= 35) return { text: "Crítico", color: "red" };
    if (compliance > 35 && compliance <= 75) return { text: "Aceptable", color: "orange" };
    return { text: "Exitoso", color: "green" };
};

const ObjTable = ({ data }) => {
    return (
        <table border="1" cellPadding="10">
            <thead>
                <tr>
                    <th>Código</th>
                    <th>Objetivo</th>
                    <th>Meta</th>
                    <th>Avance</th>
                    <th>Cumplimiento</th>
                    <th>Estado</th>
                </tr>
            </thead>
            <tbody>
                {data.map((objective) => {
                    const status = getStatus(objective.compliance);
                    return (
                        <tr key={objective.id}>
                            <td className="p-4 text-center">{objective.id}</td>
                            <td className="p-4 text-center font-light">{objective.goal}</td>
                            <td className="p-4 text-center">{objective.target >= 100 ? `$ ${objective.target.toLocaleString()}` : `${objective.target}%`}</td>
                            <td className="p-4 text-center">{objective.progress >= 100 ? `$ ${objective.progress.toLocaleString()}` : `${objective.progress}%`}</td>
                            <td className="p-4 text-center">{objective.compliance}%</td>
                            <td className="p-4 text-center" style={{ color: status.color }}>{status.text}</td>
                        </tr>
                    );
                })}
            </tbody>
        </table>
    );
};

export default ObjTable;