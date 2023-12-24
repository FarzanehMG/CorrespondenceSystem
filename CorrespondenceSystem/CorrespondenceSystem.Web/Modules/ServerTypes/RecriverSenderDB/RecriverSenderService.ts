import { SaveRequest, SaveResponse, ServiceOptions, DeleteRequest, DeleteResponse, RetrieveRequest, RetrieveResponse, ListRequest, ListResponse, serviceRequest } from '@serenity-is/corelib';
import { RecriverSenderRow } from './RecriverSenderRow';

export namespace RecriverSenderService {
    export const baseUrl = 'RecriverSenderDB/RecriverSender';

    export declare function Create(request: SaveRequest<RecriverSenderRow>, onSuccess?: (response: SaveResponse) => void, opt?: ServiceOptions<any>): JQueryXHR;
    export declare function Update(request: SaveRequest<RecriverSenderRow>, onSuccess?: (response: SaveResponse) => void, opt?: ServiceOptions<any>): JQueryXHR;
    export declare function Delete(request: DeleteRequest, onSuccess?: (response: DeleteResponse) => void, opt?: ServiceOptions<any>): JQueryXHR;
    export declare function Retrieve(request: RetrieveRequest, onSuccess?: (response: RetrieveResponse<RecriverSenderRow>) => void, opt?: ServiceOptions<any>): JQueryXHR;
    export declare function List(request: ListRequest, onSuccess?: (response: ListResponse<RecriverSenderRow>) => void, opt?: ServiceOptions<any>): JQueryXHR;

    export const Methods = {
        Create: "RecriverSenderDB/RecriverSender/Create",
        Update: "RecriverSenderDB/RecriverSender/Update",
        Delete: "RecriverSenderDB/RecriverSender/Delete",
        Retrieve: "RecriverSenderDB/RecriverSender/Retrieve",
        List: "RecriverSenderDB/RecriverSender/List"
    } as const;

    [
        'Create', 
        'Update', 
        'Delete', 
        'Retrieve', 
        'List'
    ].forEach(x => {
        (<any>RecriverSenderService)[x] = function (r, s, o) { 
            return serviceRequest(baseUrl + '/' + x, r, s, o); 
        };
    });
}