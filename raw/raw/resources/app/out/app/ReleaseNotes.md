# March 2026 (Version 1.42.0)

Welcome to Storage Explorer version 1.42.0. This version adds some new features for sharing resources and addresses these [issues](https://github.com/microsoft/AzureStorageExplorer/issues?q=is%3Aissue+milestone%3A1.42.0+is%3Aclosed).

## SAS Direct Links

Storage Explorer now supports SAS-based direct links. A SAS-based direct link looks just like an ordinary SAS URL, except it has the `storageexplorer:` protocol. For example:

- Blob container: `storageexplorer://acct.blob.core.windows.net/container?sig=...`
- File share directory: `storageexplorer://acct.file.core.windows.net/share/dir1?sig=...`
- Blob: `storageexplorer://acct.blob.core.windows.net/container/dir1/blob.txt?sig=...`

When following a direct link, Storage Explorer can automatically attach at the container root, attach at the target item’s directory, download the target item, or download and open the item.

To create a SAS direct link, just take an ordinary SAS URL and change the protocol to `storageexplorer:`. Keep in mind that only container (`sr=c`) or share (`sr=s`) resource SAS URLs are supported, due to permission requirements. If you want the direct link to point to a directory, blob, or file within the container or share, just add the path to the item as part of the URL.

Here is a table summarizing the different types of SAS direct links and their supported operations in Storage Explorer.

  | Service    | Target Item (path) | SAS Resource (`sr`) | SAS Permissions (`sp`) | Attach (root) | Attach (target) | Download | Download & Open |
  |------------|--------------------|---------------------|------------------------|:-------------:|:---------------:|:--------:|:---------------:|
  | Blob/DFS   | Container          | `c`                 | `l`                    | ✅ | ❌ | ❌ | ❌ |
  | Blob/DFS   | Blob               | `c`                 | `rl`                   | ✅ | ✅ | ✅ | ✅ |
  | Blob/DFS   | Directory          | `c`                 | `rl`                   | ❌ | ✅ | ✅ | ✅ |
  | Blob/DFS   | Blob               | `b`                 | N/A                    | ❌ | ❌ | ❌ | ❌ |
  | File Share | Share              | `s`                 | `l`                    | ✅ | ❌ | ❌ | ❌ |
  | File Share | File               | `s`                 | `rl`                   | ❌ | ❌ | ✅ | ✅ |
  | File Share | File               | `f`                 | N/A                    | ❌ | ❌ | ❌ | ❌ |
  | Queue      | Queue              | N/A                 | `r`                    | ✅ | ❌ | ❌ | ❌ |
  | Table      | Table              | N/A                 | `r`                    | ✅ | ❌ | ❌ | ❌ |

## HTTPS Connections with Azurite

Azurite supports HTTPS communications using self-signed certificates. Storage Explorer can now detect and automatically connect to Azurite containers configured to use HTTPS.

In order for Storage Explorer to communicate successfully, you need to add the self-signed certificate to your system's certificate store. You also need to import the certificate into Storage Explorer. You can do this from the **Edit &rarr; SSL Certificates &rarr; Import Certificates** menu.

## New Feedback Experience

In this version, we've streamlined the experience to make it easier to report issues, open service requests, and provide feedback via our survey. The Feedback button in the vertical toolbar now opens a dialog with these options:

- **Report issue** - opens the Storage Explorer GitHub issues page.
- **Get help** - navigates to the Azure Portal's "Help + support" page.
- **Help us improve** - opens the Storage Explorer feedback survey.

## macOS PKG Installer

Starting with 1.42.0, we now distribute PKG installers for macOS users. The installer distribution provides a standard installation process. This is particularly useful for enterprise scenarios.

The PKG installer is now the recommended method for installing Storage Explorer on macOS. We will continue to distribute bare app bundles for updating from older versions. Going forward, Storage Explorer auto-updates will download PKG installers.

## macOS Distribution No Longer Bundled with .NET

In addition, we no longer bundle the .NET runtime with the macOS version of Storage Explorer. This significantly decreases the app size and gives users more control over which versions of .NET they wish to use.

.NET is still a required component. You can install .NET by visiting the [official .NET website](https://dotnet.microsoft.com/download).
