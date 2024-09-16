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
                            <td>{objective.id}</td>
                            <td>{objective.goal}</td>
                            <td>{objective.target >= 1000 ? `$ ${objective.target.toLocaleString()}` : `${objective.target}%`}</td>
                            <td>{objective.progress >= 1000 ? `$ ${objective.progress.toLocaleString()}` : `${objective.progress}%`}</td>
                            <td>{objective.compliance}%</td>
                            <td style={{ color: status.color }}>{status.text}</td>
                        </tr>
                    );
                })}
            </tbody>
        </table>
    );
};

export default ObjTable;