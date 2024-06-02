import { PageSplitOption } from "src/app/_models/preferences/page-split-option";
import { ReaderMode } from "src/app/_models/preferences/reader-mode";
import { LayoutMode } from "./layout-mode";
import { FITTING_OPTION, PAGING_DIRECTION } from "./reader-enums";
import {ReadingDirection} from "../../_models/preferences/reading-direction";
import {ScalingOption} from "../../_models/preferences/scaling-option";

export interface ReaderSetting {
    pageSplit: PageSplitOption;
    scalingOption: ScalingOption;
    layoutMode: LayoutMode;
    darkness: number;
    pagingDirection: PAGING_DIRECTION;
    readerMode: ReaderMode;
    emulateBook: boolean;
    readingDirection: ReadingDirection;
}
