import { proxyTexts } from "@serenity-is/corelib";

namespace CorrespondenceSystem.Texts {

    export declare namespace Db {

        namespace Administration {

            namespace Language {
                export const Id: string;
                export const LanguageId: string;
                export const LanguageName: string;
            }

            namespace Role {
                export const RoleId: string;
                export const RoleName: string;
            }

            namespace RolePermission {
                export const PermissionKey: string;
                export const RoleId: string;
                export const RoleName: string;
                export const RolePermissionId: string;
            }

            namespace Translation {
                export const CustomText: string;
                export const EntityPlural: string;
                export const Key: string;
                export const OverrideConfirmation: string;
                export const SaveChangesButton: string;
                export const SourceLanguage: string;
                export const SourceText: string;
                export const TargetLanguage: string;
                export const TargetText: string;
            }

            namespace User {
                export const DisplayName: string;
                export const Email: string;
                export const InsertDate: string;
                export const InsertUserId: string;
                export const IsActive: string;
                export const LastDirectoryUpdate: string;
                export const Password: string;
                export const PasswordConfirm: string;
                export const PasswordHash: string;
                export const PasswordSalt: string;
                export const Roles: string;
                export const Source: string;
                export const UpdateDate: string;
                export const UpdateUserId: string;
                export const UserId: string;
                export const UserImage: string;
                export const Username: string;
            }

            namespace UserPermission {
                export const Granted: string;
                export const PermissionKey: string;
                export const User: string;
                export const UserId: string;
                export const UserPermissionId: string;
                export const Username: string;
            }

            namespace UserRole {
                export const RoleId: string;
                export const RoleName: string;
                export const User: string;
                export const UserId: string;
                export const UserRoleId: string;
                export const Username: string;
            }
        }

        namespace CounterpartDB {

            namespace Counterpart {
                export const CopyType: string;
                export const CreatedDate: string;
                export const CreatorUserName: string;
                export const Id: string;
                export const LetterId: string;
                export const LetterIdentifier: string;
                export const ModifiedDate: string;
                export const ModifiedUserName: string;
                export const ReciverId: string;
                export const ReciverName: string;
            }
        }

        namespace GrandSubjectDB {

            namespace GrandSubject {
                export const CreatedDate: string;
                export const CreatorUserName: string;
                export const Description: string;
                export const Id: string;
                export const ModifiedDate: string;
                export const ModifiedUserName: string;
                export const Title: string;
            }
        }

        namespace LetterAttachmentDB {

            namespace LetterAttachment {
                export const AttachmentFile: string;
                export const CreatedDate: string;
                export const CreatorUserName: string;
                export const Id: string;
                export const LetterId: string;
                export const LetterIdentifier: string;
                export const ModifiedDate: string;
                export const ModifiedUserName: string;
                export const Title: string;
            }
        }

        namespace LetterDB {

            namespace Letter {
                export const ConfidentialLevel: string;
                export const CreatedDate: string;
                export const CreatorUserName: string;
                export const DetailList: string;
                export const GrandSubjectId: string;
                export const GrandSubjectTitle: string;
                export const HasAttachment: string;
                export const Id: string;
                export const LetterCarrier: string;
                export const LetterContent: string;
                export const LetterFile: string;
                export const LetterIdentifier: string;
                export const LetterIdentifierGen: string;
                export const LetterNo: string;
                export const LetterType: string;
                export const ModifiedDate: string;
                export const ModifiedUserName: string;
                export const NeedAnswer: string;
                export const PriorityState: string;
                export const ReceiverId: string;
                export const ReceiverName: string;
                export const SenderId: string;
                export const SenderName: string;
                export const SignLettersDetailList: string;
                export const State: string;
                export const Tag: string;
                export const TemplateId: string;
                export const TemplateTitle: string;
                export const Title: string;
                export const UseDefaultTemplate: string;
            }
        }

        namespace LetterHistoryDB {

            namespace LetterHistory {
                export const ActionType: string;
                export const CreatedDate: string;
                export const CreatorUserName: string;
                export const GrandSubjectId: string;
                export const HasAttachment: string;
                export const Id: string;
                export const LetterCarrier: string;
                export const LetterContent: string;
                export const LetterId: string;
                export const LetterIdentifier: string;
                export const LetterIdentifierGen: string;
                export const LetterLetterIdentifier: string;
                export const LetterNo: string;
                export const LetterType: string;
                export const ModifiedDate: string;
                export const ModifiedUserName: string;
                export const PriorityState: string;
                export const ReceiverId: string;
                export const SenderId: string;
                export const State: string;
                export const Tag: string;
                export const TemplateId: string;
                export const Title: string;
            }
        }

        namespace RecriverSenderDB {

            namespace RecriverSender {
                export const CreatedDate: string;
                export const CreatorUserName: string;
                export const Id: string;
                export const IsDefault: string;
                export const ModifiedDate: string;
                export const ModifiedUserName: string;
                export const Name: string;
            }
        }

        namespace RelatedLettersDB {

            namespace RelatedLetters {
                export const CreatedDate: string;
                export const CreatorUserName: string;
                export const Id: string;
                export const LetterId: string;
                export const LetterIdentifier: string;
                export const ModifiedDate: string;
                export const ModifiedUserName: string;
                export const RelatedLetterId: string;
                export const RelationType: string;
            }
        }

        namespace SignDB {

            namespace Sign {
                export const CreatedDate: string;
                export const CreatorUserName: string;
                export const Id: string;
                export const IsLast: string;
                export const ModifiedDate: string;
                export const ModifiedUserName: string;
                export const SignAttachment: string;
                export const Title: string;
                export const UserId: string;
            }
        }

        namespace SignLettersDB {

            namespace SignLetters {
                export const CreatedDate: string;
                export const CreatorUserName: string;
                export const Id: string;
                export const LetterId: string;
                export const LetterIdentifier: string;
                export const ModifiedUserName: string;
                export const SignDate: string;
                export const SignId: string;
                export const SignLetterId: string;
                export const SignTitle: string;
                export const SignType: string;
            }
        }

        namespace TemplateDB {

            namespace Template {
                export const CreatedDate: string;
                export const CreatorUserName: string;
                export const Id: string;
                export const IsDefault: string;
                export const ModifiedDate: string;
                export const ModifiedUserName: string;
                export const TemplateFile: string;
                export const Title: string;
            }
        }
    }

    export declare namespace Forms {

        namespace Membership {

            namespace Login {
                export const ForgotPassword: string;
                export const LoginToYourAccount: string;
                export const RememberMe: string;
                export const SignInButton: string;
                export const SignUpButton: string;
            }

            namespace SendActivation {
                export const FormInfo: string;
                export const FormTitle: string;
                export const SubmitButton: string;
                export const Success: string;
            }

            namespace SignUp {
                export const ActivateEmailSubject: string;
                export const ActivationCompleteMessage: string;
                export const ConfirmEmail: string;
                export const ConfirmPassword: string;
                export const DisplayName: string;
                export const Email: string;
                export const FormInfo: string;
                export const FormTitle: string;
                export const Password: string;
                export const SubmitButton: string;
                export const Success: string;
            }
        }
        export const SiteTitle: string;
    }

    export declare namespace Navigation {
        export const Dashboard: string;
        export const LogoutLink: string;
        export const SiteTitle: string;
    }

    export declare namespace Site {

        namespace AccessDenied {
            export const ClickToChangeUser: string;
            export const ClickToLogin: string;
            export const LackPermissions: string;
            export const NotLoggedIn: string;
            export const PageTitle: string;
        }

        namespace Layout {
            export const Language: string;
            export const Theme: string;
        }

        namespace RolePermissionDialog {
            export const DialogTitle: string;
            export const EditButton: string;
            export const SaveSuccess: string;
        }

        namespace UserDialog {
            export const EditPermissionsButton: string;
            export const EditRolesButton: string;
        }

        namespace UserPermissionDialog {
            export const DialogTitle: string;
            export const Grant: string;
            export const Permission: string;
            export const Revoke: string;
            export const SaveSuccess: string;
        }

        namespace ValidationError {
            export const Title: string;
        }
    }

    export declare namespace Validation {
        export const AuthenticationError: string;
        export const CurrentPasswordMismatch: string;
        export const DeleteForeignKeyError: string;
        export const EmailConfirm: string;
        export const EmailInUse: string;
        export const InvalidActivateToken: string;
        export const InvalidResetToken: string;
        export const MinRequiredPasswordLength: string;
        export const PasswordConfirmMismatch: string;
        export const SavePrimaryKeyError: string;
    }

    CorrespondenceSystem['Texts'] = proxyTexts(Texts, '', {
        Db: {
            Administration: {
                Language: {},
                Role: {},
                RolePermission: {},
                Translation: {},
                User: {},
                UserPermission: {},
                UserRole: {}
            },
            CounterpartDB: {
                Counterpart: {}
            },
            GrandSubjectDB: {
                GrandSubject: {}
            },
            LetterAttachmentDB: {
                LetterAttachment: {}
            },
            LetterDB: {
                Letter: {}
            },
            LetterHistoryDB: {
                LetterHistory: {}
            },
            RecriverSenderDB: {
                RecriverSender: {}
            },
            RelatedLettersDB: {
                RelatedLetters: {}
            },
            SignDB: {
                Sign: {}
            },
            SignLettersDB: {
                SignLetters: {}
            },
            TemplateDB: {
                Template: {}
            }
        },
        Forms: {
            Membership: {
                Login: {},
                SendActivation: {},
                SignUp: {}
            }
        },
        Navigation: {},
        Site: {
            AccessDenied: {},
            Layout: {},
            RolePermissionDialog: {},
            UserDialog: {},
            UserPermissionDialog: {},
            ValidationError: {}
        },
        Validation: {}
    }) as any;
}

export const Texts = CorrespondenceSystem.Texts;