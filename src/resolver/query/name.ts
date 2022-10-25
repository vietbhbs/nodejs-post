import { NameModel, IName } from "../../model";
import { Input, Output } from "req-res-formatter";
import config from "../../config/config";

const queryName = {
    names: async (req: any, res: any) => {
        let page: number, offset: number;
        [page, offset] = Input.list(req);
        let names: IName[];

        if (page) {
            offset = offset ? offset : config.offset;
            names = await NameModel.find()
                .skip(Math.abs((page - 1) * offset))
                .limit(offset);
        } else {
            names = await NameModel.find();
        }

        return Output.response(req, names, res);
    },

    name: async (req: any, res: any) => {
        const name = await NameModel.findById(Input.detail(req));

        return Output.response(req, name, res);
    },
};

export default queryName;
