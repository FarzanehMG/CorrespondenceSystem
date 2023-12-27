import { ColumnsBase, fieldsProxy } from "@serenity-is/corelib";
import { Column } from "@serenity-is/sleekgrid";
import { GrandSubjectRow } from "./GrandSubjectRow";

export interface GrandSubjectColumns {
    Id: Column<GrandSubjectRow>;
    Title: Column<GrandSubjectRow>;
    Description: Column<GrandSubjectRow>;
    CreatedDate: Column<GrandSubjectRow>;
    CreatorUserName: Column<GrandSubjectRow>;
    ModifiedDate: Column<GrandSubjectRow>;
    ModifiedUserName: Column<GrandSubjectRow>;
}

export class GrandSubjectColumns extends ColumnsBase<GrandSubjectRow> {
    static readonly columnsKey = 'GrandSubjectDB.GrandSubject';
    static readonly Fields = fieldsProxy<GrandSubjectColumns>();
}