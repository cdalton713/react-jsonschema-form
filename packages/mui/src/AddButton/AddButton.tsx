import { Plus } from "lucide-react";
import IconButton from '@mui/material/IconButton';
import { FormContextType, IconButtonProps, RJSFSchema, StrictRJSFSchema, TranslatableString } from '@rjsf/utils';

/** The `AddButton` renders a button that represent the `Add` action on a form
 */
export default function AddButton<T = any, S extends StrictRJSFSchema = RJSFSchema, F extends FormContextType = any>({
  uiSchema,
  registry,
  ...props
}: IconButtonProps<T, S, F>) {
  const { translateString } = registry;
  return (
    <IconButton title={translateString(TranslatableString.AddItemButton)} {...props} color='primary'>
      <Plus size={14} />
    </IconButton>
  );
}
