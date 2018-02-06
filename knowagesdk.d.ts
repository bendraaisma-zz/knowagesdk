export class Sbi {
    constructor(protocol: string, host: string, port: string, contextPath: string, controllerPath: string);

    authenticate(user: string, password: string, callback: any): void;

    getDocumentHtml(documentLabel: string, parameters?: any, style?: string): any;
}

export namespace Sbi {
    function authenticate(user: string, password: string, callback: any): void;

    function getDocumentHtml(documentLabel: string, parameters?: any, style?: string): any;

    namespace authenticate {
        const prototype: {
        };
    }

    namespace getDocumentHtml {
        const prototype: {
        };
    }
}

