import { workspace } from 'vscode';
import { WorkspaceExtensionConfiguration } from './environment';

export function getConfig(): WorkspaceExtensionConfiguration {
	return workspace.getConfiguration('VSCord') as WorkspaceExtensionConfiguration;
}
