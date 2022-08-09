const fs = require('fs/promises')
const { mainModule } = require('process')


class Contenedor {
    constructor(ruta){
        this.ruta = ruta
    }

    async getAll(){
        try {
            const objs = await fs.readFile(this.ruta, 'utf-8')
            return JSON.parse(objs)

        } catch (error) {
            return("Error, hiciste algo mal")
        }        
    }

    async save(obj){
        try {
            const objs = await this.getAll()

        let newId;
        if (objs.length == 0){
            newId = 1
        }
        else {
            newId = objs[objs.length - 1].id + 1
        }
        
        const newObj = {id: newId, ...obj}
        objs.push(newObj)

        await fs.writeFile(this.ruta, JSON.stringify(objs, null, 2))

        return newId
        } catch (error) {
            console.log("error al guardar")
        }
    }

    async getById(id, newObj){
        try {
            const objs = await this.getAll();
            const indexObj = objs.findIndex((o) => o.id == id)

            if (indexObj == -1){
                return "objeto no encontrado"
            }else{
                objs[indexObj] = {id, ...newObj};
                await fs.writeFile(this.ruta, JSON.stringify(objs, null, 2));
            }

            return {id, ...newObj}
        } catch (error) {
            console.log("error al actualizar")
        }
    }


    async deleteById(id){

        try {
            
        const objs = await this.getAll();
        const indexObj = objs.findIndex((o) => o.id == id);

        if (indexObj == -1) {
            return "elemento no encontrado"
        } else {
            objs.splice(indexObj, 1);
            await fs.writeFile(this.ruta, JSON.stringify(objs, null, 2));
        }
        }catch (error) {
            return "no se pudo eliminar"   
        }
    }

    async deleteAll(){
        try {
            const objs = await this.getAll();
            const newRuta = []

            if (objs.length < 1) {
                return newRuta
            } else {
                
                await fs.readFile(this.ruta, JSON.stringify(objs, null, 2));
            }
            }catch (error) {
                return "no se pudo eliminar"   
            }
    }

}

async function main(){
    const contenedor = new Contenedor('./base.json')
    console.log (await contenedor.getAll())
}

main();

module.exports = Contenedor;
