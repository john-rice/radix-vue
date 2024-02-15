const styles = "@import '@radix-ui/colors/black-alpha.css';\n@import '@radix-ui/colors/mauve.css';\n@import '@radix-ui/colors/grass.css';\n\n/* reset */\na,\nbutton {\n  all: unset;\n}\n\n.ToolbarRoot {\n  display: flex;\n  padding: 10px;\n  width: 100%;\n  min-width: max-content;\n  border-radius: 6px;\n  background-color: white;\n  box-shadow: 0 2px 10px var(--black-a7);\n}\n\n.ToolbarToggleItem,\n.ToolbarLink,\n.ToolbarButton {\n  flex: 0 0 auto;\n  color: var(--mauve-11);\n  height: 25px;\n  padding: 0 5px;\n  border-radius: 4px;\n  display: inline-flex;\n  font-size: 13px;\n  line-height: 1;\n  align-items: center;\n  justify-content: center;\n}\n.ToolbarToggleItem:hover,\n.ToolbarLink:hover,\n.ToolbarButton:hover {\n  background-color: var(--grass-3);\n  color: var(--grass-11);\n}\n.ToolbarToggleItem:focus,\n.ToolbarLink:focus,\n.ToolbarButton:focus {\n  position: relative;\n  box-shadow: 0 0 0 2px var(--grass-7);\n}\n\n.ToolbarToggleItem {\n  background-color: white;\n  margin-left: 2px;\n}\n.ToolbarToggleItem:first-child {\n  margin-left: 0;\n}\n.ToolbarToggleItem[data-state='on'] {\n  background-color: var(--grass-5);\n  color: var(--grass-11);\n}\n\n.ToolbarSeparator {\n  width: 1px;\n  background-color: var(--mauve-6);\n  margin: 0 10px;\n}\n\n.ToolbarLink {\n  background-color: transparent;\n  color: var(--mauve-11);\n  display: none;\n  justify-content: center;\n  align-items: center;\n}\n.ToolbarLink:hover {\n  background-color: transparent;\n  cursor: pointer;\n}\n@media (min-width: 520px) {\n  .ToolbarLink {\n    display: inline-flex;\n  }\n}\n\n.ToolbarButton {\n  padding-left: 10px;\n  padding-right: 10px;\n  color: white;\n  background-color: var(--grass-9);\n}\n.ToolbarButton:hover {\n  background-color: var(--grass-10);\n  color: white;\n}";
export {
  styles as default
};