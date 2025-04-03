function formatDate(dateString) {
    const months = ["janeiro", "fevereiro", "março", "abril", "maio", "junho", "julho", "agosto", "setembro", "outubro", "novembro", "dezembro"];
    const [day, month, year] = dateString.split("/");
    return `${parseInt(day)} de ${months[parseInt(month) - 1]} de ${year}`;
}

console.log(formatDate("22/04/1983"));
