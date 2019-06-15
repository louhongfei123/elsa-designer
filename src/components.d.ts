/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */


import { HTMLStencilElement, JSXBase } from '@stencil/core/internal';
import {
  Activity,
  ActivityComponent,
} from './models';


export namespace Components {
  interface WfActivity {
    'activityId': string;
    'left': number;
    'top': number;
    'type': string;
  }
  interface WfActivityEditorModal {
    'activity': Activity;
    'hide': () => Promise<void>;
    'show': () => Promise<void>;
  }
  interface WfActivityLibrary {
    'registerActivity': (activity: ActivityComponent) => Promise<void>;
  }
  interface WfActivityPicker {
    'hide': () => Promise<void>;
    'show': () => Promise<void>;
  }
  interface WfConnection {
    'destinationActivityId': string;
    'outcome': string;
    'sourceActivityId': string;
  }
  interface WfContextMenu {
    'handleContextMenuEvent': (e: MouseEvent) => Promise<void>;
    'target': HTMLElement;
    'targetSelector': string;
  }
  interface WfContextMenuItem {
    'text': any;
  }
  interface WfCustomActivity {
    'category': string;
    'description': string;
    'displayName': string;
    'outcomes': string;
    'type': string;
  }
  interface WfDesigner {
    'addActivity': (activityDefinition: ActivityComponent) => Promise<void>;
    'updateActivity': (activity: Activity) => Promise<void>;
  }
  interface WfDesignerHost {}
  interface WfLog {
    'category': string;
    'description': string;
    'displayName': string;
    'type': string;
  }
  interface WfReadLine {
    'category': string;
    'description': string;
    'displayName': string;
    'type': string;
  }
  interface WfSetVariable {
    'category': string;
    'description': string;
    'displayName': string;
    'type': string;
  }
  interface WfWriteLine {
    'category': string;
    'description': string;
    'displayName': string;
    'type': string;
  }
}

declare global {


  interface HTMLWfActivityElement extends Components.WfActivity, HTMLStencilElement {}
  var HTMLWfActivityElement: {
    prototype: HTMLWfActivityElement;
    new (): HTMLWfActivityElement;
  };

  interface HTMLWfActivityEditorModalElement extends Components.WfActivityEditorModal, HTMLStencilElement {}
  var HTMLWfActivityEditorModalElement: {
    prototype: HTMLWfActivityEditorModalElement;
    new (): HTMLWfActivityEditorModalElement;
  };

  interface HTMLWfActivityLibraryElement extends Components.WfActivityLibrary, HTMLStencilElement {}
  var HTMLWfActivityLibraryElement: {
    prototype: HTMLWfActivityLibraryElement;
    new (): HTMLWfActivityLibraryElement;
  };

  interface HTMLWfActivityPickerElement extends Components.WfActivityPicker, HTMLStencilElement {}
  var HTMLWfActivityPickerElement: {
    prototype: HTMLWfActivityPickerElement;
    new (): HTMLWfActivityPickerElement;
  };

  interface HTMLWfConnectionElement extends Components.WfConnection, HTMLStencilElement {}
  var HTMLWfConnectionElement: {
    prototype: HTMLWfConnectionElement;
    new (): HTMLWfConnectionElement;
  };

  interface HTMLWfContextMenuElement extends Components.WfContextMenu, HTMLStencilElement {}
  var HTMLWfContextMenuElement: {
    prototype: HTMLWfContextMenuElement;
    new (): HTMLWfContextMenuElement;
  };

  interface HTMLWfContextMenuItemElement extends Components.WfContextMenuItem, HTMLStencilElement {}
  var HTMLWfContextMenuItemElement: {
    prototype: HTMLWfContextMenuItemElement;
    new (): HTMLWfContextMenuItemElement;
  };

  interface HTMLWfCustomActivityElement extends Components.WfCustomActivity, HTMLStencilElement {}
  var HTMLWfCustomActivityElement: {
    prototype: HTMLWfCustomActivityElement;
    new (): HTMLWfCustomActivityElement;
  };

  interface HTMLWfDesignerElement extends Components.WfDesigner, HTMLStencilElement {}
  var HTMLWfDesignerElement: {
    prototype: HTMLWfDesignerElement;
    new (): HTMLWfDesignerElement;
  };

  interface HTMLWfDesignerHostElement extends Components.WfDesignerHost, HTMLStencilElement {}
  var HTMLWfDesignerHostElement: {
    prototype: HTMLWfDesignerHostElement;
    new (): HTMLWfDesignerHostElement;
  };

  interface HTMLWfLogElement extends Components.WfLog, HTMLStencilElement {}
  var HTMLWfLogElement: {
    prototype: HTMLWfLogElement;
    new (): HTMLWfLogElement;
  };

  interface HTMLWfReadLineElement extends Components.WfReadLine, HTMLStencilElement {}
  var HTMLWfReadLineElement: {
    prototype: HTMLWfReadLineElement;
    new (): HTMLWfReadLineElement;
  };

  interface HTMLWfSetVariableElement extends Components.WfSetVariable, HTMLStencilElement {}
  var HTMLWfSetVariableElement: {
    prototype: HTMLWfSetVariableElement;
    new (): HTMLWfSetVariableElement;
  };

  interface HTMLWfWriteLineElement extends Components.WfWriteLine, HTMLStencilElement {}
  var HTMLWfWriteLineElement: {
    prototype: HTMLWfWriteLineElement;
    new (): HTMLWfWriteLineElement;
  };
  interface HTMLElementTagNameMap {
    'wf-activity': HTMLWfActivityElement;
    'wf-activity-editor-modal': HTMLWfActivityEditorModalElement;
    'wf-activity-library': HTMLWfActivityLibraryElement;
    'wf-activity-picker': HTMLWfActivityPickerElement;
    'wf-connection': HTMLWfConnectionElement;
    'wf-context-menu': HTMLWfContextMenuElement;
    'wf-context-menu-item': HTMLWfContextMenuItemElement;
    'wf-custom-activity': HTMLWfCustomActivityElement;
    'wf-designer': HTMLWfDesignerElement;
    'wf-designer-host': HTMLWfDesignerHostElement;
    'wf-log': HTMLWfLogElement;
    'wf-read-line': HTMLWfReadLineElement;
    'wf-set-variable': HTMLWfSetVariableElement;
    'wf-write-line': HTMLWfWriteLineElement;
  }
}

declare namespace LocalJSX {
  interface WfActivity extends JSXBase.HTMLAttributes<HTMLWfActivityElement> {
    'activityId'?: string;
    'left'?: number;
    'top'?: number;
    'type'?: string;
  }
  interface WfActivityEditorModal extends JSXBase.HTMLAttributes<HTMLWfActivityEditorModalElement> {
    'activity'?: Activity;
    'onUpdate-activity'?: (event: CustomEvent<any>) => void;
  }
  interface WfActivityLibrary extends JSXBase.HTMLAttributes<HTMLWfActivityLibraryElement> {}
  interface WfActivityPicker extends JSXBase.HTMLAttributes<HTMLWfActivityPickerElement> {
    'onActivity-picked'?: (event: CustomEvent<any>) => void;
  }
  interface WfConnection extends JSXBase.HTMLAttributes<HTMLWfConnectionElement> {
    'destinationActivityId'?: string;
    'outcome'?: string;
    'sourceActivityId'?: string;
  }
  interface WfContextMenu extends JSXBase.HTMLAttributes<HTMLWfContextMenuElement> {
    'onContext-menu'?: (event: CustomEvent<any>) => void;
    'target'?: HTMLElement;
    'targetSelector'?: string;
  }
  interface WfContextMenuItem extends JSXBase.HTMLAttributes<HTMLWfContextMenuItemElement> {
    'text'?: any;
  }
  interface WfCustomActivity extends JSXBase.HTMLAttributes<HTMLWfCustomActivityElement> {
    'category'?: string;
    'description'?: string;
    'displayName'?: string;
    'outcomes'?: string;
    'type'?: string;
  }
  interface WfDesigner extends JSXBase.HTMLAttributes<HTMLWfDesignerElement> {
    'onAdd-activity'?: (event: CustomEvent<any>) => void;
    'onEdit-activity'?: (event: CustomEvent<any>) => void;
  }
  interface WfDesignerHost extends JSXBase.HTMLAttributes<HTMLWfDesignerHostElement> {}
  interface WfLog extends JSXBase.HTMLAttributes<HTMLWfLogElement> {
    'category'?: string;
    'description'?: string;
    'displayName'?: string;
    'type'?: string;
  }
  interface WfReadLine extends JSXBase.HTMLAttributes<HTMLWfReadLineElement> {
    'category'?: string;
    'description'?: string;
    'displayName'?: string;
    'type'?: string;
  }
  interface WfSetVariable extends JSXBase.HTMLAttributes<HTMLWfSetVariableElement> {
    'category'?: string;
    'description'?: string;
    'displayName'?: string;
    'type'?: string;
  }
  interface WfWriteLine extends JSXBase.HTMLAttributes<HTMLWfWriteLineElement> {
    'category'?: string;
    'description'?: string;
    'displayName'?: string;
    'type'?: string;
  }

  interface IntrinsicElements {
    'wf-activity': WfActivity;
    'wf-activity-editor-modal': WfActivityEditorModal;
    'wf-activity-library': WfActivityLibrary;
    'wf-activity-picker': WfActivityPicker;
    'wf-connection': WfConnection;
    'wf-context-menu': WfContextMenu;
    'wf-context-menu-item': WfContextMenuItem;
    'wf-custom-activity': WfCustomActivity;
    'wf-designer': WfDesigner;
    'wf-designer-host': WfDesignerHost;
    'wf-log': WfLog;
    'wf-read-line': WfReadLine;
    'wf-set-variable': WfSetVariable;
    'wf-write-line': WfWriteLine;
  }
}

export { LocalJSX as JSX };


declare module "@stencil/core" {
  export namespace JSX {
    interface IntrinsicElements extends LocalJSX.IntrinsicElements {}
  }
}


