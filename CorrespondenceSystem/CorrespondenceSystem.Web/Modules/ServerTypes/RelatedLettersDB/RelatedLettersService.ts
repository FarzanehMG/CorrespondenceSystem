import { SaveRequest, SaveResponse, ServiceOptions, DeleteRequest, DeleteResponse, RetrieveRequest, RetrieveResponse, ListRequest, ListResponse, serviceRequest } from '@serenity-is/corelib';
import { RelatedLettersRow } from './RelatedLettersRow';

export namespace RelatedLettersService {
    export const baseUrl = 'RelatedLettersDB/RelatedLetters';

    export declare function Create(request: SaveRequest<RelatedLettersRow>, onSuccess?: (response: SaveResponse) => void, opt?: ServiceOptions<any>): JQueryXHR;
    export declare function Update(request: SaveRequest<RelatedLettersRow>, onSuccess?: (response: SaveResponse) => void, opt?: ServiceOptions<any>): JQueryXHR;
    export declare function Delete(request: DeleteRequest, onSuccess?: (response: DeleteResponse) => void, opt?: ServiceOptions<any>): JQueryXHR;
    export declare function Retrieve(request: RetrieveRequest, onSuccess?: (response: RetrieveResponse<RelatedLettersRow>) => void, opt?: ServiceOptions<any>): JQueryXHR;
    export declare function List(request: ListRequest, onSuccess?: (response: ListResponse<RelatedLettersRow>) => void, opt?: ServiceOptions<any>): JQueryXHR;

    export const Methods = {
        Create: "RelatedLettersDB/RelatedLetters/Create",
        Update: "RelatedLettersDB/RelatedLetters/Update",
        Delete: "RelatedLettersDB/RelatedLetters/Delete",
        Retrieve: "RelatedLettersDB/RelatedLetters/Retrieve",
        List: "RelatedLettersDB/RelatedLetters/List"
    } as const;

    [
        'Create', 
        'Update', 
        'Delete', 
        'Retrieve', 
        'List'
    ].forEach(x => {
        (<any>RelatedLettersService)[x] = function (r, s, o) { 
            return serviceRequest(baseUrl + '/' + x, r, s, o); 
        };
    });
}