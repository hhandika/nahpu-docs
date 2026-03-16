---
sidebar_position: 3
title: Taxon Registry
---

## Overview

You can register a new taxon manually or by importing a file.

## Register a new taxon

### Required fields

- **Class**: The class of the taxon.
- **Order**: The order of the taxon.
- **Family**: The family of the taxon.
- **Genus**: The genus of the taxon.
- **Specific epithet**: The specific epithet of the taxon.

### Optional fields

- **Author**: The author of the taxon and the year of the publication.
- **Common name**: The common name of the taxon.
- **IUCN Red List category**: The IUCN Red List status of the taxon.
- **CITES status**: The CITES status of the taxon.
- **Country conservation status**: The conservation status of the taxon in a specific country.
- **Sorting order**: Arbitrary order to sort the taxon. It is mostly use when you export the record. For example, you can use the phylogenetic order.
- **Notes**: Any additional information about the taxon.

### Manual registration

1. Go to the project dashboard.
2. At the taxon panel, click on the `+ Add taxon` button.
3. Fill in the taxon information.

### Import from file

1. Prepare your import file. Preferred formats are `.xlsx`, `.csv`, and `.tsv`.
2. Go to the project dashboard.
3. At the taxon panel, click on the `Import from file` button.
4. Use the `Select file` button to add the file. The app will automatically map the columns to the correct fields.

Delimiter behavior:

- `.csv` uses comma.
- `.tsv` uses tab.
- Excel files are parsed as spreadsheets.
- For other file types, NAHPU makes a best-effort parsing attempt.
- If a file extension is not recognized, auto detect first tries Excel, comma, tab, and semicolon.
- If auto detect still fails, enter a custom raw delimiter in advanced parser override.

Recommended import template columns:

- `class`, `Order`, `family`, `genus`, `epithet`, `scientific name`, `common name`
- Required import fields are `class`, `Order`, `family`, `genus`, and `epithet`.
- Header matching is flexible, so aliases such as `taxonClass`, `taxonOrder`, `taxonFamily`, and `specificEpithet` are also accepted.

:::note
Best support is for `.xlsx`. Older/other Excel formats may fail. If needed, re-save as `.xlsx`, `.csv`, or `.tsv`.
:::

## Edit a taxon

1. Go to the project dashboard.
2. At the taxon panel inside the registered taxon, click on the `View all` button.
3. Click on the pencil icon to edit the taxon.
