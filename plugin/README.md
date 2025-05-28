# darol
houdini-instruments-plugin

## Houdini Package Setup
To install the plugin:
- Copy or symlink `houdini-ui/plugin/houdini-ui.json` to `$HOUDINI_USER_PREF_DIR/packages`
- Modify "HOUDINI_UI" env variable to the houdini-ui/plugin clone path.
- Restart Houdini

### Shelf Tools

#### Network Exporter
Exports a houdini network as a `json` file reprensenting all nodes, a selection of nodes, or single node and optionally its subnetworks. The `json` file captures `parm` values of the nodes, as well as connections between nodes. Connections are represented as a `dict` that connect an ordered input of the node to the ordered output of its input node. 

#### Network Importer
Capable of rebuilding a network represented by the `json` exported by the tool above. Be careful importing `/obj` into a geometry. :)
