export interface IDocumentationModule<S, D> {
  server(): S;
  setup(): D;
}
