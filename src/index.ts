// We define the empty imports so the auto-complete feature works as expected.
import {} from '@dcl/sdk/math'
import { engine, Transform } from '@dcl/sdk/ecs'
import { EntityNames } from '../assets/scene/entity-names'
import { getTriggerEvents, getActionEvents } from '@dcl/asset-packs/dist/events'
import { TriggerType } from '@dcl/asset-packs'
import { circularSystem } from './systems'
import { setupUi } from './ui'
import { createCube } from './factory'

export function main() {
  // Fetch an entity from the Creator Hub. Match the entity name with the one in the Entiy List UI.
  // See https://docs.decentraland.org/creator/editor/editor-plus-code/
  // const entityReference = engine.getEntityOrNullByName(EntityNames.placeholder)

  // Do something with the entity
  // if (entityReference) {  
  //   console.log(Transform.get(entityReference).position)
  // }
  
  // Create a new entity using a factory function. See `src/factory.ts` file.
  // createCube(1, 1, 1)

  // Defining behavior. See `src/systems.ts` file.
  // engine.addSystem(circularSystem)

  // draw UI. Here is the logic to spawn cubes. See `src/ui.tsx` file.
  // setupUi()
}
