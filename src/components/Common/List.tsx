import { Children, ComponentPropsWithRef, ReactNode } from 'react';

interface ListProps extends ComponentPropsWithRef<'ul'> {
  children: ReactNode;
}

/**
 * Render a generic list
 */
function List({ children, ...props }: ListProps) {
  return (
    <ul {...props}>
      {Children.map(children, (child, index) => (
        <li key={index}>{child}</li>
      ))}
    </ul>
  );
}

export default List;
