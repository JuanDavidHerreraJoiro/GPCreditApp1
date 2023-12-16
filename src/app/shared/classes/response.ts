export class ResponseModel<Type>{
    successed!:boolean;
    message!  :string;
    data!   :Type;
}