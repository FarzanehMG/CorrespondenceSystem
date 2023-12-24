import { SaveRequest, SaveResponse, ServiceOptions, DeleteRequest, DeleteResponse, RetrieveRequest, RetrieveResponse, ListRequest, ListResponse, serviceRequest } from '@serenity-is/corelib';
import { GrandSubjectRow } from './GrandSubjectRow';

export namespace GrandSubjectService {
    export const baseUrl = 'GrandSubjectDB/GrandSubject';

    export declare function Create(request: SaveRequest<GrandSubjectRow>, onSuccess?: (response: SaveResponse) => void, opt?: ServiceOptions<any>): JQueryXHR;
    export declare function Update(request: SaveRequest<GrandSubjectRow>, onSuccess?: (response: SaveResponse) => void, opt?: ServiceOptions<any>): JQueryXHR;
    export declare function Delete(request: DeleteRequest, onSuccess?: (response: DeleteResponse) => void, opt?: ServiceOptions<any>): JQueryXHR;
    export declare function Retrieve(request: RetrieveRequest, onSuccess?: (response: RetrieveResponse<GrandSubjectRow>) => void, opt?: ServiceOptions<any>): JQueryXHR;
    export declare function List(request: ListRequest, onSuccess?: (response: ListResponse<GrandSubjectRow>) => void, opt?: ServiceOptions<any>): JQueryXHR;

    export const Methods = {
        Create: "GrandSubjectDB/GrandSubject/Create",
        Update: "GrandSubjectDB/GrandSubject/Update",
        Delete: "GrandSubjectDB/GrandSubject/Delete",
        Retrieve: "GrandSubjectDB/GrandSubject/Retrieve",
        List: "GrandSubjectDB/GrandSubject/List"
    } as const;

    [
        'Create', 
        'Update', 
        'Delete', 
        'Retrieve', 
        'List'
    ].forEach(x => {
        (<any>GrandSubjectService)[x] = function (r, s, o) { 
            return serviceRequest(baseUrl + '/' + x, r, s, o); 
        };
    });
}