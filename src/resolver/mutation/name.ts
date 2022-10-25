import { NameModel } from "../../model";
import { Input, Output } from "req-res-formatter";

const mutationName = {
    createName: async (req: any, res: any) => {
        let name;
        try {
            name = await NameModel.create(Input.create(req));
        } catch (e) {
            console.log(e);
        }

        return Output.response(req, name, res);
    },
    updateName: async (req: any, res: any) => {
        let id: number, data: any;
        [data, id] = Input.update(req);
        const name = await NameModel.findOneAndUpdate({ _id: id }, data, { new: true }).catch((e) => console.log(e));

        return Output.response(req, name, res);
    },
    deleteName: async (req: any, res: any) => {
        const id: number = Input.delete(req);
        const Name: { acknowledged: boolean; deletedCount: number } = await NameModel.deleteOne({
            _id: id,
        });

        return Output.response(req, Name.deletedCount, res);
    },
};

export default mutationName;
