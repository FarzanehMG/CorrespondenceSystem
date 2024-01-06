
namespace CorrespondenceSystem.Common;

public class DashboardPageModel
{
    public int CountIncomingLetter { get; set; }
    public int CountOutgoingLetter { get; set; }

    public string[] PieChartLabel { get; set; }
    public int[] PieChartData { get; set; }
}