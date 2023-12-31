﻿import { SaveRequest, SaveResponse, ServiceOptions, DeleteRequest, DeleteResponse, RetrieveRequest, RetrieveResponse, ListRequest, ListResponse, ServiceRequest, serviceRequest } from "@serenity-is/corelib";
import { SignLetterViewModel } from "../Modules/LetterDB.DTO.SignLetterViewModel";
import { SignLettersRow } from "./SignLettersRow";

export namespace SignLettersService {
    export const baseUrl = 'SignLettersDB/SignLetters';

    export declare function Create(request: SaveRequest<SignLettersRow>, onSuccess?: (response: SaveResponse) => void, opt?: ServiceOptions<any>): JQueryXHR;
    export declare function Update(request: SaveRequest<SignLettersRow>, onSuccess?: (response: SaveResponse) => void, opt?: ServiceOptions<any>): JQueryXHR;
    export declare function Delete(request: DeleteRequest, onSuccess?: (response: DeleteResponse) => void, opt?: ServiceOptions<any>): JQueryXHR;
    export declare function Retrieve(request: RetrieveRequest, onSuccess?: (response: RetrieveResponse<SignLettersRow>) => void, opt?: ServiceOptions<any>): JQueryXHR;
    export declare function List(request: ListRequest, onSuccess?: (response: ListResponse<SignLettersRow>) => void, opt?: ServiceOptions<any>): JQueryXHR;
    export declare function AddSignLetter(request: ServiceRequest, onSuccess?: (response: SignLetterViewModel) => void, opt?: ServiceOptions<any>): JQueryXHR;

    export const Methods = {
        Create: "SignLettersDB/SignLetters/Create",
        Update: "SignLettersDB/SignLetters/Update",
        Delete: "SignLettersDB/SignLetters/Delete",
        Retrieve: "SignLettersDB/SignLetters/Retrieve",
        List: "SignLettersDB/SignLetters/List",
        AddSignLetter: "SignLettersDB/SignLetters/AddSignLetter"
    } as const;

    [
        'Create', 
        'Update', 
        'Delete', 
        'Retrieve', 
        'List', 
        'AddSignLetter'
    ].forEach(x => {
        (<any>SignLettersService)[x] = function (r, s, o) {
            return serviceRequest(baseUrl + '/' + x, r, s, o);
        };
    });
}