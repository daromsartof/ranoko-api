Date.prototype.formatDate = function () {
    const day = this.getDate();
    const month = this.getMonth() + 1;
    const year = this.getFullYear();

    return `${day}/${month}/${year}`;
}