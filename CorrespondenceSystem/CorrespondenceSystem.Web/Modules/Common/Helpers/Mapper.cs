namespace CorrespondenceSystem.Modules.Common.Helpers;

public static class Mapper
{
    public static void MapTo(IRow src, IRow des)
    {

        foreach (var s in src.GetFields())
        {
            foreach (var d in des.GetFields())
            {
                if (d.Name == "Id")
                {
                    Guid Id = Guid.NewGuid();
                    des[d.Name] = Id;
                }
                else if (d.Name == "LetterId")
                {

                    des[d.Name] = src["Id"];
                }
                else if (s.Name == d.Name && s.Type == d.Type)
                {


                    des[d.Name] = src[s.Name];


                }
            }
        }


    }
}
