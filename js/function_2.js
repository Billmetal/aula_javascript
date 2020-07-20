(() => {
    thihs.name = "Arrow Fuction";
    const getNameArrowFn = () => this.name;

    function getName(){
        return this.name;
    }

    const user = {
        name: "Nome no objeto de execução",
        getNameArrowFn,
        getName
    }

    console.log(getNameArrowFn());
    console.log(getName());
})();