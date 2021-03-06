import { GraphQLObjectType as ObjectType } from 'graphql';

import CreateCircleMutation from './CreateCircleMutation';
import UpdateCircleMutation from './UpdateCircleMutation';
import DeleteCircleMutation from './DeleteCircleMutation';

const Mutation = new ObjectType({
  name: 'Mutation',
  fields: {
    createCircle: CreateCircleMutation,
    updateCircle: UpdateCircleMutation,
    deleteCircle: DeleteCircleMutation,
  },
});

export default Mutation;
