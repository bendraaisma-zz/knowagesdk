export class Sbi {
    constructor(config: any);

    authenticate(credentials: any, headers: any, callback: any): any;

    executeDataSet(configModule: any): any;

    getDataSetList(configModule: any): any;

    getDocumentHtml(config: any): any;

    getQbeHtml(configModule: any): any;

    getWorksheetHtml(configModule: any): any;

    injectDocument(configModule: any): any;

    injectQbe(configModule: any): any;

    injectWorksheet(configModule: any): any;

}

export namespace Sbi {
    namespace prototype {
        function authenticate(credentials: any, headers: any, callback: any): any;

        function executeDataSet(configModule: any): any;

        function getDataSetList(configModule: any): any;

        function getDocumentHtml(config: any): any;

        function getQbeHtml(configModule: any): any;

        function getWorksheetHtml(configModule: any): any;

        function injectDocument(configModule: any): any;

        function injectQbe(configModule: any): any;

        function injectWorksheet(configModule: any): any;

        namespace authenticate {
            const prototype: {
            };

        }

        namespace executeDataSet {
            const prototype: {
            };

        }

        namespace getDataSetList {
            const prototype: {
            };

        }

        namespace getDocumentHtml {
            const prototype: {
            };

        }

        namespace getQbeHtml {
            const prototype: {
            };

        }

        namespace getWorksheetHtml {
            const prototype: {
            };

        }

        namespace injectDocument {
            const prototype: {
            };

        }

        namespace injectQbe {
            const prototype: {
            };

        }

        namespace injectWorksheet {
            const prototype: {
            };

        }

    }

}

