/*
* convert-empty-frontmatter.test.ts
*
* Copyright (C) 2021 by RStudio, PBC
*
*/
import { docs } from "../../utils.ts";
import { testConvert } from "./convert.ts";

testConvert(docs("empty-frontmatter.qmd"));
