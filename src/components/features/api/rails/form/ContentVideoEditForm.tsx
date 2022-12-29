import Button from '@mui/material/Button';
import type { ContentVideo } from "src/types/contentvideo"
import { FormControl, FormControlLabel, FormGroup, IconButton, InputLabel, makeStyles, MenuItem, Select, TextField, Theme } from "@material-ui/core"

export const ContentVideoEditForm = (props: ContentVideo) => {
  const {
    id,
    title,
    description,
    thumbnail,
    state,
  } = props;
}