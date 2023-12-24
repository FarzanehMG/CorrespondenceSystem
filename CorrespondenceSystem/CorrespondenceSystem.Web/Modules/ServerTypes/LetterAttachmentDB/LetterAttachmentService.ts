import { SaveRequest, SaveResponse, ServiceOptions, DeleteRequest, DeleteResponse, RetrieveRequest, RetrieveResponse, ListRequest, ListResponse, serviceRequest } from "@serenity-is/corelib";
import { LetterAttachmentRow } from "./LetterAttachmentRow";

export namespace LetterAttachmentService {
    export const baseUrl = 'LetterAttachmentDB/LetterAttachment';

    export declare function Create(request: SaveRequest<LetterAttachmentRow>, onSuccess?: (response: SaveResponse) => void, opt?: ServiceOptions<any>): JQueryXHR;
    export declare function Update(request: SaveRequest<LetterAttachmentRow>, onSuccess?: (response: SaveResponse) => void, opt?: ServiceOptions<any>): JQueryXHR;
    export declare function Delete(request: DeleteRequest, onSuccess?: (response: DeleteResponse) => void, opt?: ServiceOptions<any>): JQueryXHR;
    export declare function Retrieve(request: RetrieveRequest, onSuccess?: (response: RetrieveResponse<LetterAttachmentRow>) => void, opt?: ServiceOptions<any>): JQueryXHR;
    export declare function List(request: ListRequest, onSuccess?: (response: ListResponse<LetterAttachmentRow>) => void, opt?: ServiceOptions<any>): JQueryXHR;

    export const Methods = {
        Create: "LetterAttachmentDB/LetterAttachment/Create",
        Update: "LetterAttachmentDB/LetterAttachment/Update",
        Delete: "LetterAttachmentDB/LetterAttachment/Delete",
        Retrieve: "LetterAttachmentDB/LetterAttachment/Retrieve",
        List: "LetterAttachmentDB/LetterAttachment/List"
    } as const;

    [
        'Create', 
        'Update', 
        'Delete', 
        'Retrieve', 
        'List'
    ].forEach(x => {
        (<any>LetterAttachmentService)[x] = function (r, s, o) {
            return serviceRequest(baseUrl + '/' + x, r, s, o);
        };
    });
}