export class Sbi {
    constructor(protocol: string, host: string, port: string, contextPath: string, controllerPath: string);

    authenticate(user: string, password: string, callback: function): any;

    getDocumentHtml(documentLabel: string, parameters: any): any;

}

export namespace Sbi {
    namespace prototype {
        function authenticate(user: string, password: string, callback: any): any;

        function getDocumentHtml(documentLabel: string, parameters: any): any;

        namespace authenticate {
            const prototype: {
            };

        }

        namespace getDocumentHtml {
            const prototype: {
            };

        }

    }

}

