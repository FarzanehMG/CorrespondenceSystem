import { SaveRequest, SaveResponse, ServiceOptions, DeleteRequest, DeleteResponse, RetrieveRequest, RetrieveResponse, ListRequest, ListResponse, ServiceRequest, serviceRequest } from "@serenity-is/corelib";
import { identifiregenViewModel } from "../Modules/LetterDB.DTO.identifiregenViewModel";
import { LetterRow } from "./LetterRow";

export namespace LetterService {
    export const baseUrl = 'LetterDB/Letter';

    export declare function Create(request: SaveRequest<LetterRow>, onSuccess?: (response: SaveResponse) => void, opt?: ServiceOptions<any>): JQueryXHR;
    export declare function Update(request: SaveRequest<LetterRow>, onSuccess?: (response: SaveResponse) => void, opt?: ServiceOptions<any>): JQueryXHR;
    export declare function Delete(request: DeleteRequest, onSuccess?: (response: DeleteResponse) => void, opt?: ServiceOptions<any>): JQueryXHR;
    export declare function Retrieve(request: RetrieveRequest, onSuccess?: (response: RetrieveResponse<LetterRow>) => void, opt?: ServiceOptions<any>): JQueryXHR;
    export declare function List(request: ListRequest, onSuccess?: (response: ListResponse<LetterRow>) => void, opt?: ServiceOptions<any>): JQueryXHR;
    export declare function SetDefaultRecriverSender(request: ServiceRequest, onSuccess?: (response: string) => void, opt?: ServiceOptions<any>): JQueryXHR;
    export declare function SetDefaultTemplate(request: ServiceRequest, onSuccess?: (response: string) => void, opt?: ServiceOptions<any>): JQueryXHR;
    export declare function SetDefaultIdentifireGen(request: ServiceRequest, onSuccess?: (response: identifiregenViewModel) => void, opt?: ServiceOptions<any>): JQueryXHR;

    export const Methods = {
        Create: "LetterDB/Letter/Create",
        Update: "LetterDB/Letter/Update",
        Delete: "LetterDB/Letter/Delete",
        Retrieve: "LetterDB/Letter/Retrieve",
        List: "LetterDB/Letter/List",
        SetDefaultRecriverSender: "LetterDB/Letter/SetDefaultRecriverSender",
        SetDefaultTemplate: "LetterDB/Letter/SetDefaultTemplate",
        SetDefaultIdentifireGen: "LetterDB/Letter/SetDefaultIdentifireGen"
    } as const;

    [
        'Create', 
        'Update', 
        'Delete', 
        'Retrieve', 
        'List', 
        'SetDefaultRecriverSender', 
        'SetDefaultTemplate', 
        'SetDefaultIdentifireGen'
    ].forEach(x => {
        (<any>LetterService)[x] = function (r, s, o) {
            return serviceRequest(baseUrl + '/' + x, r, s, o);
        };
    });
}