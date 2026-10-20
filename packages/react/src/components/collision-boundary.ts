import { createContext } from 'react'

/**
 * The element the editor's floating menus and popovers stay inside. See
 * `EditorProps.collisionBoundary`.
 */
export const CollisionBoundaryContext = createContext<Element | undefined>(undefined)
